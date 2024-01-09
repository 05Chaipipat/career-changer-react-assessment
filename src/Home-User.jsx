const HomeUser = (props) => {
  const employees = props.dataEmployees;
  console.log(employees);
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
        {employees.map((data) => {
          return (
            <tr>
              <td>{data.name}</td>
              <td>{data.lastname}</td>
              <td>{data.position}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default HomeUser;
