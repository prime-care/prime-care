const EditProfile = () => {
  return (
    <div className="max-w-xl container mx-auto bg-white p-6 rounded-lg ">
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary">
          Edit profile
        </button>
      </div>
      <div className="flex justify-center mb-6">
        <div className="relative">
          <label htmlFor="file">
            <img
              src="public\images\cat-3.png"
              alt="Profile"
              className="w-24 h-24 rounded-full cursor-pointer border-2 border-gray-200"
            />
            <button className="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L3.5 13.672V16.5a.5.5 0 00.5.5h2.828l11.086-11.086a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M4 16v-1.828l11.086-11.086a1 1 0 111.414 1.414L5.414 16H4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>

          <input type="file" id="file" className="hidden" />
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Full Name</label>
          <input
            type="text"
            value="Zhenya Rynzhuk"
            className="w-full px-3  text-gray-500   py-2 border border-gray-300 rounded focus:border-none focus:ring focus:ring-secondary"
            onChange={() => {}}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <div className="relative">
            <input
              onChange={() => {}}
              type="email"
              value="zhenyarynzhuk@gmail.com"
              className="w-full px-3  text-gray-500 py-2 border border-gray-300 rounded focus:border-none focus:ring focus:ring-secondary"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
              &#10003;
            </span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold">Number</label>
          <div className="relative">
            <input
              onChange={() => {}}
              type="text"
              value="587-556-998-02"
              className="w-full px-3  text-gray-500 py-2 border border-gray-300 rounded focus:border-none focus:ring focus:ring-secondary"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-green-500">
              &#10003;
            </span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold">City</label>
          <input
            onChange={() => {}}
            type="text"
            value="Sanghai, China"
            className="w-full px-3  text-gray-500 py-2 border border-gray-300 rounded focus:border-none focus:ring focus:ring-secondary"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold">State</label>
            <input
              onChange={() => {}}
              type="text"
              value="Mallen"
              className="w-full px-3  text-gray-500 py-2 border border-gray-300 rounded focus:border-none focus:ring focus:ring-secondary"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold">Zip Code</label>
            <input
              onChange={() => {}}
              type="text"
              value="7789"
              className="w-full px-3  text-gray-500 py-2 border border-gray-300 rounded focus:border-none focus:ring focus:ring-secondary"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold">Country</label>
          <input
            onChange={() => {}}
            type="text"
            value="China"
            className="w-full px-3  text-gray-500 text-gray-500 py-2 border border-gray-300 rounded focus:border-none focus:ring focus:ring-secondary"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button className="text-primary px-4 py-2 rounded border border-primary hover:bg-secondary">
            Back To Home
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
