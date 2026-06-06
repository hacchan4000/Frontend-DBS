'use client';

import React, { useState } from 'react';
import Card from '@/components/atoms/Card';
import { Button } from '@/app/components/ui/Button';
import { handleUpload } from '@/services/api/upload.service';

const Page = () => {
  const [file, setFile] = useState<File | null>(null);

  const [prediction, setPrediction] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const upload = async () => {
    try {
      if (!file) return;

      setLoading(true);
      setError('');
      setPrediction(null);

      const result = await handleUpload(file);

      setPrediction(result.prediction);

    } catch (err: any) {
      setError(
        err.message || 'Upload failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-5"
    >
      <Card
        className="
        w-[600px]
        p-8
        space-y-6"
      >
        <h1
          className="
          text-3xl
          font-bold
          text-center"
        >
          Smart Finance Prediction
        </h1>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] || null
            )
          }
          className="
          w-full
          border
          rounded-xl
          p-3"
        />

        {file && (
          <p>
            Selected: {file.name}
          </p>
        )}

        <Button
          onClick={upload}
          disabled={!file || loading}
          className="w-full"
        >
          {loading
            ? 'Predicting...'
            : 'Upload & Predict'}
        </Button>

        {error && (
          <div
            className="
            bg-red-500/20
            p-3
            rounded-xl"
          >
            {error}
          </div>
        )}

        {prediction !== null && (
          <Card
            bgColor="liquid-glass"
            className="text-center"
          >
            <p>
              Prediction Result
            </p>

            <h2
              className="
              text-5xl
              font-bold"
            >
              {prediction}
            </h2>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default Page;