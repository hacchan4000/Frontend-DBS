import styles from './PageToolbar.module.css'

interface PageToolbarProps {
  onAdd?: () => void
  searchPlaceholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
}

export function PageToolbar({
  onAdd,
  searchPlaceholder = 'Search…',
  searchValue = '',
  onSearchChange,
}: PageToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <button
        type="button"
        onClick={onAdd}
        className={styles.addButton}
        aria-label="Add"
      >
        <img src={'/Button-Plus.png'} alt="" className={styles.addIcon} />
      </button>
      <div className={styles.searchBox}>
        <img src={'/Icon-Search.png'} alt="" className={styles.searchIcon} />
        <input
          type="search"
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          placeholder={searchPlaceholder}
          className={styles.searchInput}
        />
      </div>
    </div>
  )
}