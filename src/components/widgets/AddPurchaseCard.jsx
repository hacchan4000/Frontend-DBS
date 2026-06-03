'use client';

import { useState } from 'react';
import { Card } from '../ui/Card';
import styles from './AddPurchaseCard.module.css';
import AddPurchaseModal from '../ui/AddPurchase';

export function AddPurchaseCard() {
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (newPurchase) => {
    console.log('New purchase:', newPurchase);
    // swap this out for your state/context/API call later
  };

  return (
    <>
      <Card variant="addPurchase">
        <p className={styles.prompt}>Add your purchases here!</p>
        <button
          type="button"
          className={styles.addButton}
          aria-label="Add purchase"
          onClick={() => setShowModal(true)}
        >
          <span className={styles.addText}>Add</span>
          <span className="sr-only">Add</span>
        </button>
      </Card>

      {showModal && (
        <AddPurchaseModal
          onClose={() => setShowModal(false)}
          onAdd={handleAdd}
        />
      )}
    </>
  );
}