import { Phone, Mail, MapPin } from "lucide-react";
const Contact = () => {
  return (
    <div className="section-padding bg-secondary-900 py-7 text-text-50">
      <div>
        <h2 className="my-2 text-center text-xl font-bold">
          Use Our Services right this moment!
        </h2>
        <div className="flex justify-center gap-2">
          <button className="w-fit rounded-md border-2 border-primary-400 bg-secondary-600 p-2 text-sm">
            Start Now
          </button>
          <button className="w-fit rounded-md border-2 border-primary-400 p-2 text-sm">
            Download App
          </button>
        </div>
      </div>
      <ul className="mx-auto my-5 flex w-4/5 flex-col items-center gap-1">
        <li>
          <h3 className="font-bold">Contacts</h3>
        </li>
        <li className="flex justify-center gap-2">
          <Phone className="w-5 text-primary-300" />
          <span>+1 (234) 567 89 00</span>
        </li>
        <li className="flex items-center justify-center gap-2">
          <Mail className="w-5 text-primary-300" />
          <span>sixfeetunder@fake.email.com</span>
        </li>
        <li className="flex items-center justify-center gap-2">
          <MapPin className="w-5 text-primary-300" />
          <span>There is no escape</span>
        </li>
      </ul>
      <div className="mx-auto my-5 grid w-3/4 grid-cols-1 items-center gap-2 text-center">
        <h3 className="font-bold">Newsletter</h3>
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded border-2 border-primary-400 bg-secondary-600 p-1 text-text-50 placeholder:text-text-50"
        />
        <button className=" w-full rounded-md border-2 border-primary-400 p-2 text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contact;
