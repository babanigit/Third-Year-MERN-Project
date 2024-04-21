import { fessStructure } from "../../assets/about";

const Fees = () => {
  return (
    <>
      <div className=" flex justify-center">
        <table className="border-collapse border-2 border-gray-400  ">
          <thead className="bg-purple-300 bg-opacity-50 ">
            <tr>
              <th className="border border-gray-400 px-4 py-2">Remarks</th>
              <th className="border border-gray-400 px-4 py-2">Fees</th>
            </tr>
          </thead>
          <tbody>
            {fessStructure.map((prop) => (
              <tr key={prop.id} className="border border-gray-400">
                <td className="border border-gray-400 px-4 py-2">
                  {prop.remark}
                </td>
                <td className="border border-gray-400 px-4 py-2">{prop.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fees;
