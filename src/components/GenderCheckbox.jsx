export default function GenderCheckbox() {
  return (
    <div className="flex">
      <div className="from-control">
        <label htmlFor="" className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            name=""
            className="checkbox border-slate-900"
            id="gender"
          />
        </label>
      </div>
      <div className="from-control">
        <label htmlFor="" className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            name=""
            className="checkbox border-slate-900"
            id="gender"
          />
        </label>
      </div>
    </div>
  );
}
