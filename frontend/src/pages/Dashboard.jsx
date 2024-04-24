import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="">
      <div className="bg-[#043873] h-[50px]  px-6 lg:px-44 pt-2">
        <Link to="/" className="text-white font-bold">👈🏻Back</Link>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[10%]"></div>
        <div className="w-[80%]">
          <h2 className=" font-bold">Dataset: Twitter</h2>
          <table className=" table-fixed  border-separate border-spacing-6">
            <thead className="border border-b-4 border-indigo-500 "> 
              <tr className="border-b-4 border-indigo-500 border">
                <th>Sl no.</th>
                <th>Comment</th>
                <th>Category</th>
                <th>Sentiment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="mx-4 my-2">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                <td className="px-4 py-2 border border-blue-800 rounded-md  text-blue-800">Electronic</td>
                <td className="px-4 py-2 border border-red-600 rounded-md  text-red-600">Negative</td>
              </tr>
              <tr className="mx-4 my-2">
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                <td className="px-4 py-2 border border-blue-800 rounded-md  text-blue-800">Electronic</td>
                <td className="px-4 py-2 border border-green-800 rounded-md  text-green-800">Positive</td>
              </tr>
              <tr className="mx-4 my-2">
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                <td className="px-4 py-2 border border-blue-800 rounded-md  text-blue-800">Electronic</td>
                <td className="px-4 py-2 border border-green-800 rounded-md  text-green-800">Positive</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[10%]"></div>
      </div>
    </div>
  );
}
