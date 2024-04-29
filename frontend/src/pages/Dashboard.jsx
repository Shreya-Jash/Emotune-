import { Link } from "react-router-dom";
import sentiment from "../data/Sentiment";

export default function Dashboard() {
  const items = sentiment;
  return (
    <div className="">
      <div className="bg-[#043873] h-[50px]  px-6 lg:px-44 pt-2">
        <Link to="/" className="text-white font-bold">
          👈🏻Back
        </Link>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[10%]"></div>
        <div className="w-[80%]">
          <div className="font-bold">Dataset: Twitter</div>
          <table className=" table-fixed  border-separate border-spacing-6">
            <thead className="border border-b-4 border-indigo-500 ">
              <tr className="border-b-4 border-indigo-500 border">
                <th>Sl no.</th>
                <th>Comment</th>
                <th>Category</th>
                <th>Sentiment</th>
              </tr>
            </thead>
            {items.map((data) => {
              const { id, text, tone } = data;
              return (
                <tbody key={id}>
                  <tr className="mx-4 my-2">
                    <td className="px-4 py-2">{id}</td>
                    <td className="px-4 py-2">{text}</td>
                    <td className="px-4 py-2 border border-blue-800 rounded-md  text-blue-800">
                      Electronic
                    </td>
                    <td
                      className={`px-4 py-2 border rounded-md ${
                        tone === "Negative"
                          ? "border-red-600 text-red-600"
                          : "border-green-600 text-green-600"
                      }`}
                    >
                      {tone}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div className="w-[10%]"></div>
      </div>
    </div>
  );
}
