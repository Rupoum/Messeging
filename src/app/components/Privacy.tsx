import Hello from "./Hello";
import Hello2 from "./Hello2";
import { PrivacyWords } from "./PrivacyWords";

const Privacy = () => {
  return (
    <>
      <div className="mt-10">
        <Hello />

        {/* <div className="tex">hello</div> */}
      </div>
      <div className="my-32">
        <PrivacyWords />
      </div>

      <Hello2 />
    </>
  );
};

export default Privacy;
