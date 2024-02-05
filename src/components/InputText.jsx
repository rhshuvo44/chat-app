

const InputText = () => {
    return (
        <div>
        <label htmlFor="" className="label p-2">
          <span className="text-base label-text">Username</span>
        </label>
        <input
          type="text"
          placeholder="johndoe"
          className="input input-bordered w-full h-10"
        />
      </div>
    );
};

export default InputText;