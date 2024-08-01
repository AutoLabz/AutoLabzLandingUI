export function Footer() {
    return (
        <footer className="footer z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white">
          <div className="p-12 flex items-center ">
            <p className="text-slate-600 ml-auto">
            &copy; <span className="font-bold">AutoLabz</span> {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </footer>
      );
    }

  