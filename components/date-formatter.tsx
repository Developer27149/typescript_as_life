import { format, parseISO } from "date-fns";

import { BsCalendar2Date } from "react-icons/bs";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <div className="flex gap-2 items-center second_text_color">
      <BsCalendar2Date />
      <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
    </div>
  );
};

export default DateFormatter;
