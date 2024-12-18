import React from 'react';

const Faq = () => {
    return (
        <section>
            <div>
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
</div>
            </div>
        </section>
    );
};

export default Faq;