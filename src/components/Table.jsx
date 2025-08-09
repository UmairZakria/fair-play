import React from 'react';

const colors = {
  red: '#B2121F',
  darkBlue: '#121110',
  green: '#1F8E37',
};

const numberColors = {
  '0': colors.green,
  '1': colors.red,
  '2': colors.darkBlue,
  '3': colors.red,
  '4': colors.darkBlue,
  '5': colors.red,
  '6': colors.darkBlue,
  '7': colors.red,
  '8': colors.darkBlue,
  '9': colors.red,
  '10': colors.darkBlue,
  '11': colors.darkBlue,
  '12': colors.red,
  '13': colors.darkBlue,
  '14': colors.red,
  '15': colors.darkBlue,
  '16': colors.red,
  '17': colors.darkBlue,
  '18': colors.red,
  '19': colors.red,
  '20': colors.darkBlue,
  '21': colors.red,
  '22': colors.darkBlue,
  '23': colors.red,
  '24': colors.red,
  '25': colors.red,
  '26': colors.darkBlue,
  '27': colors.red,
  '28': colors.darkBlue,
  '29': colors.darkBlue,
  '30': colors.red,
  '31': colors.darkBlue,
  '32': colors.red,
  '33': colors.darkBlue,
  '34': colors.red,
  '35': colors.darkBlue,
  '36': colors.red,
};

const Table = () => {
  // Roulette numbers in display order
  const tableNumbers = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
    5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
  ];

  // Updated container dimensions for tighter vertical fit
  const width = 600;
  const height = 120; // reduced from 150
  const borderRadius = 12; // smaller curve for tighter fit

  // Calculate positions for numbers around the curved container
  const calculatePosition = (index, total) => {
    // Perimeter calculations
    const straightWidth = width - 2 * borderRadius;
    const straightHeight = height - 2 * borderRadius;
    const cornerArc = (Math.PI * borderRadius) / 2;

    const perimeter =
      2 * straightWidth +
      2 * straightHeight +
      4 * cornerArc;

    const segmentLength = perimeter / total;
    const position = index * segmentLength;

    // Top side (right half)
    if (position < straightWidth / 2) {
      return {
        x: width / 2 + position,
        y: 0,
        rotation: 0
      };
    }
    // Top-right corner
    else if (position < straightWidth / 2 + cornerArc) {
      const arcPos = position - straightWidth / 2;
      const angle = (arcPos / cornerArc) * (Math.PI / 2);
      return {
        x: width - borderRadius + borderRadius * Math.sin(angle),
        y: borderRadius - borderRadius * Math.cos(angle),
        rotation: angle * 180 / Math.PI
      };
    }
    // Right side
    else if (position < straightWidth / 2 + cornerArc + straightHeight) {
      const sidePos = position - straightWidth / 2 - cornerArc;
      return {
        x: width,
        y: borderRadius + sidePos,
        rotation: 90
      };
    }
    // Bottom-right corner
    else if (position < straightWidth / 2 + cornerArc + straightHeight + cornerArc) {
      const arcPos = position - straightWidth / 2 - cornerArc - straightHeight;
      const angle = (arcPos / cornerArc) * (Math.PI / 2);
      return {
        x: width - borderRadius * Math.cos(angle),
        y: height - borderRadius + borderRadius * Math.sin(angle),
        rotation: 90 + angle * 180 / Math.PI
      };
    }
    // Bottom side
    else if (position < straightWidth / 2 + cornerArc + straightHeight + cornerArc + straightWidth) {
      const sidePos = position - straightWidth / 2 - cornerArc - straightHeight - cornerArc;
      return {
        x: width - borderRadius - sidePos,
        y: height,
        rotation: 180
      };
    }
    // Bottom-left corner
    else if (position < straightWidth / 2 + cornerArc + straightHeight + cornerArc + straightWidth + cornerArc) {
      const arcPos = position - straightWidth / 2 - cornerArc - straightHeight - cornerArc - straightWidth;
      const angle = (arcPos / cornerArc) * (Math.PI / 2);
      return {
        x: borderRadius - borderRadius * Math.sin(angle),
        y: height - borderRadius * Math.cos(angle),
        rotation: 180 + angle * 180 / Math.PI
      };
    }
    // Left side
    else if (position < straightWidth / 2 + cornerArc + straightHeight + cornerArc + straightWidth + cornerArc + straightHeight) {
      const sidePos = position - straightWidth / 2 - cornerArc - straightHeight - cornerArc - straightWidth - cornerArc;
      return {
        x: 0,
        y: height - borderRadius - sidePos,
        rotation: 270
      };
    }
    // Top-left corner
    else if (position < straightWidth / 2 + cornerArc + straightHeight + cornerArc + straightWidth + cornerArc + straightHeight + cornerArc) {
      const arcPos = position - straightWidth / 2 - cornerArc - straightHeight - cornerArc - straightWidth - cornerArc - straightHeight;
      const angle = (arcPos / cornerArc) * (Math.PI / 2);
      return {
        x: borderRadius * (1 - Math.cos(angle)),
        y: borderRadius * Math.sin(angle),
        rotation: 270 + angle * 180 / Math.PI
      };
    }
    // Top side (left half)
    else {
      const sidePos = position - straightWidth / 2 - cornerArc - straightHeight - cornerArc - straightWidth - cornerArc - straightHeight - cornerArc;
      return {
        x: borderRadius + sidePos,
        y: 0,
        rotation: 0
      };
    }
  };

  return (
    <div
      style={{ backgroundColor: colors.darkBlue }}
      className="min-h-screen p-4 flex flex-col items-center justify-center text-white font-inter"
    >
      {/* Top Recent Numbers Display */}
      <div
        style={{ backgroundColor: colors.darkBlue }}
        className="w-full max-w-2xl bg-black/50 p-2 rounded-xl flex items-center justify-center mb-4 border-[1px] border-white/30"
      >
        <span className="bg-white/10 px-2 py-1 rounded-md text-sm mr-2 border-[1px] border-white/30" style={{ backgroundColor: '#fff' }}>
          <span className="text-black font-bold">15</span>
        </span>
        <div className="flex gap-2 text-white/70 text-sm">
          <span>15</span>
          <span>24</span>
          <span>2</span>
          <span>17</span>
          <span style={{ color: colors.red }}>30</span>
          <span>13</span>
          <span>13</span>
          <span>24</span>
          <span style={{ color: colors.red }}>25</span>
        </div>
      </div>

      <div className="w-full max-w-4xl relative flex items-center justify-center">
        {/* Left Side Control Panel */}
        <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 flex flex-col items-center gap-2">
          <div className="bg-black/50 p-2 rounded-xl border-[1px] border-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <div className="bg-black/50 px-3 py-1 rounded-xl border-[1px] border-white/30 text-white">
            2
          </div>
          <div className="bg-black/50 p-2 rounded-xl border-[1px] border-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* The main roulette table container */}
        <div className="relative w-full max-w-[600px] h-[120px] border-[1px] border-white/30 rounded-xl flex flex-col items-center justify-center bg-black">
          {/* Number positions */}
          {tableNumbers.map((value, index) => {
            const total = tableNumbers.length;

            // recalc perimeter & slot size
            const straightWidth = width - 2 * borderRadius;
            const straightHeight = height - 2 * borderRadius;
            const cornerArc = (Math.PI * borderRadius) / 2;
            const perimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
            const segmentLength = perimeter / total;

            const pos = calculatePosition(index, total);

            return (
              <div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  transform: `translate(-50%, -50%) rotate(${pos.rotation}deg)`,
                  width: `${segmentLength}px`,
                  height: `26px`,
                }}
              >
                <div
                  style={{
                    backgroundColor: numberColors[value],
                    transform: `rotate(${-pos.rotation}deg)`,
                    width: '100%',
                    height: '100%',
                    borderRadius: '4px',
                  }}
                  className="flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">{value}</span>
                </div>
              </div>
            );
          })}

          {/* Inner betting areas */}
          <div className="absolute inset-[15%] rounded-4xl border-[1px] border-white/30 overflow-hidden flex">
            {/* Left betting area container */}
            <div className="flex-1 relative flex flex-col border-r-[1px] ">
              <div className="flex-1 flex items-center justify-center text-sm font-bold ">Tier</div>
              <div className="flex-1 flex items-center justify-center text-sm font-bold   border-t-white/30">Orphelins</div>
            {/* </div> */}
            {/* Right betting area container */}
            {/* <div className="flex-1 relative flex flex-col"> */}
              <div className="flex-1 flex items-center justify-center text-sm font-bold ">Voisins</div>
              <div className="flex-1 flex items-center justify-center text-sm font-bold   border-t-white/30">Zero</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
