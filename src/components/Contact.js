import React, { useState } from 'react';

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [createForm, setCreateForm] = useState(initialState);

  const onChange = (e) => {
    setCreateForm({ ...createForm,
    [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
e.preventDefault()
setCreateForm(initialState)
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Enter your name!
          <input
            placeholder="Name"
            name="name"
            type="text"
            value={createForm.name}
            onChange={onChange}
          />
        </label>
        <label>
          Enter your email!
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={createForm.email}
            onChange={onChange}
          />
        </label>
        <label>
          Ask your questions!
          <input
            placeholder="Message"
            name="message"
            type="text"
            value={createForm.message}
            onChange={onChange}
          />
        </label>
      </form>
      <button onSubmit={onSubmit}>Submit!</button>
    </div>
  );
};

export default Contact;
