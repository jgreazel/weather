import { MdAddCircleOutline } from "react-icons/md";

type Props = {
  onClick: () => void;
};

const AddButton = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      class="hover:scale-105 transition-all duration-200 max-w-min"
    >
      <MdAddCircleOutline size={30} />
    </div>
  );
};
export default AddButton;
