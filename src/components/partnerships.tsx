import Mihoyo from "../assets/mihoyo-seeklogo.com.svg";
import Google from "../assets/Google_2015_logo.svg";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
const Partnerships = () => {
  return (
    <div className="section-padding bg-secondary-900 py-7 text-text-50">
      <div className="text-center">
        <h2 className="my-4 text-2xl">Strong partnerships and Track record</h2>
        <p className="text-xs">
          50,000 people <span className="font-bold italic">had </span>
          faith in us!
        </p>
      </div>
      <div className="my-6">
        <div className="mb-3 flex flex-col items-center gap-2">
          <div className="w-1/3">
            <img
              src={Mihoyo}
              alt="mihoyo logo"
            />
          </div>
          <p className="text-xs">"Tech otakus save the world"</p>
        </div>
        <div className="mb-3 flex flex-col items-center gap-2">
          <div className="w-1/3">
            <img
              src={Google}
              alt="google logo"
            />
          </div>
          <p className="text-xs">"Don't be evil"</p>
        </div>
        <div className="mb-3 flex flex-col items-center gap-2">
          <div className="w-1/3">
            <img
              src={Instagram}
              alt="instagram logo"
            />
          </div>
          <p className="text-xs">"Because you look like shit in HD"</p>
        </div>
        <div className="mb-3 flex flex-col items-center gap-2">
          <div className="w-1/3">
            <img
              src={Facebook}
              alt="facebook logo"
            />
          </div>
          <p className="text-xs">"Helps you connect and share"</p>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
