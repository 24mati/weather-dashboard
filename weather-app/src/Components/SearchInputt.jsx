export default function SearchInput({ city, setCity, fetchWeather }) {
    return (
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-lg w-full text-center"
        />
        <button onClick={fetchWeather} className="bg-white px-4 py-2 rounded-lg">🔍
        </button>
      </div>
    );
  }
    