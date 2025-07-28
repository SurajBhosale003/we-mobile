import React from 'react';

const TailwindTest = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Tailwind CSS Test</h1>
      
      <div className="space-y-6">
        {/* Margin and Padding Test */}
        <div className="border-2 border-red-500 p-4">
          <h2 className="text-xl font-semibold mb-4">Margin & Padding</h2>
          <div className="bg-blue-100 p-4 mb-4">
            <div className="bg-blue-200 m-2 p-2">m-2 p-2</div>
            <div className="bg-blue-200 mx-4 my-2 px-4 py-2">mx-4 my-2 px-4 py-2</div>
            <div className="bg-blue-200 mt-8 mb-4 ml-2 mr-6 pt-1 pb-3 pl-5 pr-0">
              mt-8 mb-4 ml-2 mr-6 pt-1 pb-3 pl-5 pr-0
            </div>
          </div>
        </div>

        {/* Colors Test */}
        <div className="border-2 border-green-500 p-4">
          <h2 className="text-xl font-semibold mb-4">Colors</h2>
          <div className="flex flex-wrap gap-2">
            <div className="w-16 h-16 bg-red-500"></div>
            <div className="w-16 h-16 bg-green-500"></div>
            <div className="w-16 h-16 bg-blue-500"></div>
            <div className="w-16 h-16 bg-yellow-500"></div>
            <div className="w-16 h-16 bg-purple-500"></div>
            <div className="w-16 h-16 bg-pink-500"></div>
            <div className="w-16 h-16 bg-gray-500"></div>
          </div>
          <div className="mt-4">
            <p className="text-red-500">Text Red 500</p>
            <p className="text-green-500">Text Green 500</p>
            <p className="text-blue-500">Text Blue 500</p>
          </div>
        </div>

        {/* Flexbox Test */}
        <div className="border-2 border-purple-500 p-4">
          <h2 className="text-xl font-semibold mb-4">Flexbox</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-100 p-4">Flex Item 1</div>
            <div className="flex-1 bg-purple-200 p-4">Flex Item 2</div>
            <div className="flex-1 bg-purple-300 p-4">Flex Item 3</div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="bg-purple-100 p-2">Justify Start</div>
            <div className="bg-purple-200 p-2">Justify Center</div>
            <div className="bg-purple-300 p-2">Justify End</div>
          </div>
        </div>

        {/* Grid Test */}
        <div className="border-2 border-yellow-500 p-4">
          <h2 className="text-xl font-semibold mb-4">Grid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-yellow-100 p-4">
                Grid Item {item}
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Test */}
        <div className="border-2 border-blue-500 p-4">
          <h2 className="text-xl font-semibold mb-4">Responsive Design</h2>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            This text should change size based on screen width
          </div>
          <div className="mt-4 bg-blue-100 p-4 hidden sm:block">
            Visible on sm screens and up
          </div>
          <div className="mt-4 bg-blue-200 p-4 block sm:hidden">
            Visible only on mobile
          </div>
        </div>

        {/* Hover/Focus States */}
        <div className="border-2 border-pink-500 p-4">
          <h2 className="text-xl font-semibold mb-4">Hover & Focus States</h2>
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
            Hover/Focus Test
          </button>
          <input
            type="text"
            className="mt-4 border border-gray-300 rounded px-3 py-2 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 block w-full"
            placeholder="Focus me"
          />
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        If you can see all these styles properly, Tailwind CSS is working correctly.
      </div>
    </div>
  );
};

export default TailwindTest;