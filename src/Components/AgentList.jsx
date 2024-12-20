import React from 'react';
//  	
const AgentList = () => {
    return (
    <> 
    <section className='mt-36 text-center'>
       <div className=''>
       <h3 className='text-4xl '> Meet Our Real Estate Agents
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin


        </p>
       </div>
    <div className='flex justify-center space-x-1 w-3/4 mx-auto mt-10'>
            <div className='bg-white   hover:shadow-lg  hover:scale-110 p-2 flex-col justify-center w-1/4 mx-auto'>
               <div className='flex justify-center '>
               <img className='rounded-full   ' src="https://demo02.houzez.co/wp-content/uploads/2016/02/Artboard-2team-150x150.jpg
" alt="" />
               </div>
                <h5 className='text-center'>Brittany Watkins</h5>
                <h5 className='text-center'>Company Agent , All American Real Estate</h5>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...</p>
                <button>View Profile</button>
            </div>
            <div className='bg-white   hover:shadow-lg  hover:scale-110 p-2 flex-col justify-center w-1/4 mx-auto '>
              <div className='flex justify-center '>
              <img className='rounded-full' src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-1-150x150.jpg
" alt="" />
              </div>
                <h5 className='text-center'>Michelle Ramirez
               </h5>
                <h5 className='text-center'> Company Agent , Modern House Real Estate</h5>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...
               </p>
                <button className='text-center'> View Profile</button>
            </div>
            <div className='bg-white   hover:shadow-lg  hover:scale-110 p-2 flex-col justify-center w-1/4 mx-auto '>
              <div className='flex justify-center '>
                 <img  className='rounded-full' src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-3-150x150.jpg
" alt="" />
</div>
                <h5 className='text-center'>Samuel Palmer

</h5>
                <h5 className='text-center'>Company Agent , Modern House Real Estate</h5>
                <p className='text-center'>View Profile</p>
                <button>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...
                </button>
            </div>
            <div className='bg-white   hover:shadow-lg  hover:scale-110 p-2 flex-col justify-center  w-1/4 mx-auto '>
                <div className='flex justify-center '>
                <img className='rounded-full' src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-4-150x150.jpg" alt="" />
                </div>
                <h5 className='text-center'>Vincent Fuller

</h5>
                <h5 className='text-center'>Company Agent , Country House Real Estate</h5>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...
                </p>
                <button className='text-center'>View Profile</button>
            </div>
        </div>
    </section>
    </>
    );
};

export default AgentList;