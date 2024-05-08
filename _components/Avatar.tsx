export default function Avatar() {
    return (
      <div className="relative inline-block">
        <div className="w-50 h-50 flex items-center justify-center rounded-full">
          <div className="border-5 border-black rounded-full overflow-hidden">
            <img
              src='/avatar.png'
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
              style={{ margin: '-5px' }}
            />
          </div>
        </div>
      </div>
    );
  }
  