import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore";
import { addHours } from "date-fns";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleCLickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "David",
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleCLickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
