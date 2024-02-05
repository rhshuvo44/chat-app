

const InputPassword = () => {
  return (
    <div>
      <label htmlFor="" className="label p-2">
        <span className="text-base label-text">Confirm password</span>
      </label>
      <input
        type="password"
        placeholder="Confirm password"
        className="input input-bordered w-full h-10"
      />
    </div>
  );
};

export default InputPassword;
