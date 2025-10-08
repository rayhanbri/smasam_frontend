import React from 'react';

const Contact = () => {
    return (
       <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Employee Records</h2>

      {/* Outer container — controls scroll area */}
      <div className="overflow-auto h-96 border rounded-md shadow-sm">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700">
              <th className="sticky top-0 z-10 bg-gray-100 px-4 py-3 border-b">ID</th>
              <th className="sticky top-0 z-10 bg-gray-100 px-4 py-3 border-b">Name</th>
              <th className="sticky top-0 z-10 bg-gray-100 px-4 py-3 border-b">Department</th>
              <th className="sticky top-0 z-10 bg-gray-100 px-4 py-3 border-b">Role</th>
              <th className="sticky top-0 z-10 bg-gray-100 px-4 py-3 border-b">Email</th>
              <th className="sticky top-0 z-10 bg-gray-100 px-4 py-3 border-b">Joined Date</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">1</td>
              <td className="px-4 py-3 border-b">John Doe</td>
              <td className="px-4 py-3 border-b">Engineering</td>
              <td className="px-4 py-3 border-b">Frontend Developer</td>
              <td className="px-4 py-3 border-b">john@example.com</td>
              <td className="px-4 py-3 border-b">2022-01-12</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">2</td>
              <td className="px-4 py-3 border-b">Jane Smith</td>
              <td className="px-4 py-3 border-b">Marketing</td>
              <td className="px-4 py-3 border-b">SEO Specialist</td>
              <td className="px-4 py-3 border-b">jane@example.com</td>
              <td className="px-4 py-3 border-b">2021-11-30</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">3</td>
              <td className="px-4 py-3 border-b">Michael Brown</td>
              <td className="px-4 py-3 border-b">Finance</td>
              <td className="px-4 py-3 border-b">Accountant</td>
              <td className="px-4 py-3 border-b">michael@example.com</td>
              <td className="px-4 py-3 border-b">2020-08-25</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">4</td>
              <td className="px-4 py-3 border-b">Emily Davis</td>
              <td className="px-4 py-3 border-b">Human Resources</td>
              <td className="px-4 py-3 border-b">HR Manager</td>
              <td className="px-4 py-3 border-b">emily@example.com</td>
              <td className="px-4 py-3 border-b">2023-04-18</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">5</td>
              <td className="px-4 py-3 border-b">Robert Wilson</td>
              <td className="px-4 py-3 border-b">Sales</td>
              <td className="px-4 py-3 border-b">Sales Executive</td>
              <td className="px-4 py-3 border-b">robert@example.com</td>
              <td className="px-4 py-3 border-b">2019-12-09</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">6</td>
              <td className="px-4 py-3 border-b">Olivia Taylor</td>
              <td className="px-4 py-3 border-b">Design</td>
              <td className="px-4 py-3 border-b">UI/UX Designer</td>
              <td className="px-4 py-3 border-b">olivia@example.com</td>
              <td className="px-4 py-3 border-b">2023-03-10</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">7</td>
              <td className="px-4 py-3 border-b">Daniel Johnson</td>
              <td className="px-4 py-3 border-b">Engineering</td>
              <td className="px-4 py-3 border-b">Backend Developer</td>
              <td className="px-4 py-3 border-b">daniel@example.com</td>
              <td className="px-4 py-3 border-b">2021-09-14</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">8</td>
              <td className="px-4 py-3 border-b">Sophia Martinez</td>
              <td className="px-4 py-3 border-b">Engineering</td>
              <td className="px-4 py-3 border-b">DevOps Engineer</td>
              <td className="px-4 py-3 border-b">sophia@example.com</td>
              <td className="px-4 py-3 border-b">2020-05-22</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">9</td>
              <td className="px-4 py-3 border-b">Liam Anderson</td>
              <td className="px-4 py-3 border-b">Support</td>
              <td className="px-4 py-3 border-b">Customer Support</td>
              <td className="px-4 py-3 border-b">liam@example.com</td>
              <td className="px-4 py-3 border-b">2022-06-28</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">10</td>
              <td className="px-4 py-3 border-b">Ava Thomas</td>
              <td className="px-4 py-3 border-b">Engineering</td>
              <td className="px-4 py-3 border-b">QA Engineer</td>
              <td className="px-4 py-3 border-b">ava@example.com</td>
              <td className="px-4 py-3 border-b">2023-02-01</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">11</td>
              <td className="px-4 py-3 border-b">Ethan Garcia</td>
              <td className="px-4 py-3 border-b">Engineering</td>
              <td className="px-4 py-3 border-b">Full Stack Developer</td>
              <td className="px-4 py-3 border-b">ethan@example.com</td>
              <td className="px-4 py-3 border-b">2019-07-11</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">12</td>
              <td className="px-4 py-3 border-b">Charlotte Lee</td>
              <td className="px-4 py-3 border-b">Marketing</td>
              <td className="px-4 py-3 border-b">Content Writer</td>
              <td className="px-4 py-3 border-b">charlotte@example.com</td>
              <td className="px-4 py-3 border-b">2021-01-20</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">13</td>
              <td className="px-4 py-3 border-b">James White</td>
              <td className="px-4 py-3 border-b">Finance</td>
              <td className="px-4 py-3 border-b">Financial Analyst</td>
              <td className="px-4 py-3 border-b">james@example.com</td>
              <td className="px-4 py-3 border-b">2020-10-17</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">14</td>
              <td className="px-4 py-3 border-b">Amelia Walker</td>
              <td className="px-4 py-3 border-b">Sales</td>
              <td className="px-4 py-3 border-b">Account Executive</td>
              <td className="px-4 py-3 border-b">amelia@example.com</td>
              <td className="px-4 py-3 border-b">2022-09-03</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-3 border-b">15</td>
              <td className="px-4 py-3 border-b">Henry King</td>
              <td className="px-4 py-3 border-b">Design</td>
              <td className="px-4 py-3 border-b">Graphic Designer</td>
              <td className="px-4 py-3 border-b">henry@example.com</td>
              <td className="px-4 py-3 border-b">2018-03-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Contact;