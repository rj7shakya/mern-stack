const SignupComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
      </form>
    );
  };

  return <h2>signup</h2>;
};

export default SignupComponent;
