import React, { useState } from 'react';

const PeakVisualizer = () => {
  const [arr, setArr] = useState([10, 20, 15, 2, 23, 90, 80]);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [started, setStarted] = useState(false);

  const generateSteps = () => {
    let l = 0,
      r = arr.length - 1;
    const logs = [];

    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      logs.push({ l, r, mid });
      if (arr[mid] > arr[mid + 1]) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    logs.push({ l, r, mid: l, peak: true });
    setSteps(logs);
    setStepIndex(0);
    setStarted(true);
  };

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const current = steps[stepIndex] || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-slate-700 shadow-2xl rounded-2xl p-6 w-full max-w-3xl text-center">
        <h1 className="text-2xl font-bold mb-4">Peak Element Visualizer</h1>

        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {arr.map((num, index) => {
            let bg = 'bg-gray-200';
            if (index === current.l) bg = 'bg-blue-400';
            if (index === current.r) bg = 'bg-red-400';
            if (index === current.mid) bg = 'bg-green-400';
            if (current.peak && index === current.mid) bg = 'bg-purple-500';

            return (
              <div
                key={index}
                className={`w-12 h-12 flex items-center justify-center text-black font-bold rounded ${bg}`}
              >
                {num}
              </div>
            );
          })}
        </div>

        {!started ? (
          <button
            onClick={generateSteps}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Start Visualization
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Next Step
          </button>
        )}

        {started && (
          <div className="mt-4 text-gray-200">
            <p>Left (Blue), Right (Red), Mid (Green), Peak (Purple)</p>
            <p className="text-sm mt-1">Step {stepIndex + 1} of {steps.length}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeakVisualizer;