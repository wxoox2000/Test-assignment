const DummyTable = () => {
  return (
    <table className="ml-4 mt-5 border-2 border-collapse border-amber-300 animate-PopUp">
      <tbody className="group">
        <tr className="border-2 border-amber-300 group-odd:bg-amber-100">
          <td className="p-3">Employee</td>
          <td className="p-3 ">Salary</td>
        </tr>
        <tr className="border-2 border-amber-300">
          <td className="p-3">Paul K.</td>
          <td className="p-3 ">500$</td>
        </tr>
        <tr className="border-2 border-amber-300 group-odd:bg-amber-100">
          <td className="p-3">Ann D.</td>
          <td className="p-3 ">550$</td>
        </tr>
        <tr className="border-2 border-amber-300">
          <td className="p-3">Kevin H.</td>
          <td className="p-3 ">480$</td>
        </tr>
        <tr className="border-2 border-amber-300 group-odd:bg-amber-100">
          <td className="p-3">Sarah o.</td>
          <td className="p-3 ">500$</td>
        </tr>
        <tr className="border-2 border-amber-300">
          <td className="p-3">Steven R.</td>
          <td className="p-3 ">460$</td>
        </tr>
        <tr className="border-2 border-amber-300 group-odd:bg-amber-100">
          <td className="p-3">Kira M.</td>
          <td className="p-3 ">490$</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DummyTable;
