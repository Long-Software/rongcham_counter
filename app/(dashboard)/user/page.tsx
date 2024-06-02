import Navbar from '@/components/Navbar'
import Image from 'next/image'


const UserQueue = () => {
  return (
    <>
      <Navbar title='User Queue Management' />
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* first  */}
          <div className='list_counter h-screen bg-blue-800 rounded-xl'>
            {/* title */}
            <div className='text-center text-white text-2xl font-bold p-3'>
              User Queue
            </div>

            <div className='overflow-x-auto'>
              <table className='table'>
                {/* head */}
                <thead>
                  <tr className='bg-yellow-300'>
                    <th>ID</th>
                    <th>Counter</th>
                    <th>Attendanee</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className='bg-white'>
                    <td>
                      <div className='flex items-center gap-3'>
                        <div>
                          <div className='font-bold'>Hart Hagerty</div>
                          <div className='text-sm opacity-50'>United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>
                  {/* row 2 */}
                  <tr className='bg-white'>
                    <td>
                      <div className='flex items-center gap-3'>
                        <div>
                          <div className='font-bold'>Brice Swyre</div>
                          <div className='text-sm opacity-50'>China</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Carroll Group
                      <br />
                    </td>
                    <td>Red</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>
                  {/* row 3 */}
                  <tr className='bg-white'>
                    <td>
                      <div className='flex items-center gap-3'>
                        <div>
                          <div className='font-bold'>Marjy Ferencz</div>
                          <div className='text-sm opacity-50'>Russia</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Rowe-Schoen
                      <br />
                    </td>
                    <td>Crimson</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>
                  {/* row 4 */}
                  <tr className='bg-white'>
                    <td>
                      <div className='flex items-center gap-3'>
                        <div>
                          <div className='font-bold'>Yancy Tear</div>
                          <div className='text-sm opacity-50'>Brazil</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Wyman-Ledner
                      <br />
                    </td>
                    <td>Indigo</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </th>
                  </tr>
                </tbody>
                {/* foot */}
              </table>
            </div>
          </div>

          {/* second one */}
          <div className='grid grid-cols-1'>
            <div className='space-y-6 '>
              {/* Generate new QR Code Section */}
              <div className='bg-blue-800 h-1/3 p-6 lg:py-20 rounded-md shadow-md text-center border-8  border-yellow-400'>
                <h2 className='text-white text-xl mb-4'>Generate shop new QR code</h2>
                <button className='bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded'>
                  Generate
                </button>
              </div>

              {/* Current QR Code Section */}
              <div className='bg-blue-800 p-6 h-1/2 rounded-md shadow-md text-center'>
                <h2 className='text-white text-xl mb-4'>Current shop QR code</h2>
                <div className='bg-white p-2 inline-block rounded-md shadow-md'>
                  <Image
                    src='/qr.png'
                    width={300}
                    height={300}
                    alt='Current QR Code'
                    className='w-32 h-32 md:w-48 md:h-48 object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserQueue
