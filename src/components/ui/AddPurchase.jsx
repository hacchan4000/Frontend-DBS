'use client';

import { useState } from 'react';
import styles from './AddPurchase.module.css';

export default function AddPurchaseModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    title: '',
    category: '',
    date: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.category || !form.date || !form.price) return;
    onAdd({ ...form, id: Date.now() });
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Add Purchase</h2>

        {[
          { label: 'Title', name: 'title', type: 'text' },
          { label: 'Category', name: 'category', type: 'text' },
          { label: 'Date', name: 'date', type: 'date' },
          { label: 'Price', name: 'price', type: 'number' },
          { label: 'Image (Optional)', name: 'image', type: 'text' },
        ].map(({ label, name, type }) => (
          <div className={styles.field} key={name}>
            <label className={styles.label}>{label}</label>
            <input
              className={styles.input}
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              placeholder=""
            />
          </div>
        ))}

        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.addBtn} onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
}