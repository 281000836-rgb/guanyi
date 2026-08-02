export function createJournalStore(storage, key = "guanyi-open-journal", limit = 30) {
  if (!storage?.getItem || !storage?.setItem) throw new TypeError("A Storage-compatible adapter is required");
  const read = () => {
    try {
      const value = JSON.parse(storage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  };
  return {
    list: read,
    add(text, createdAt = new Date().toISOString()) {
      const clean = String(text || "").trim().slice(0, 500);
      if (!clean) throw new TypeError("Journal text is required");
      const items = [{ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, text: clean, createdAt }, ...read()].slice(0, limit);
      storage.setItem(key, JSON.stringify(items));
      return items[0];
    },
    clear() {
      storage.setItem(key, "[]");
    },
  };
}
