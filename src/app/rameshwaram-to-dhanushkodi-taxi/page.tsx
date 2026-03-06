import RoutePage from "@/components/routes/RoutePage";
import Dhanushkodi from "../../assets/Dhanushkodi.webp";

export default function Page() {
  return (
    <RoutePage
      title="Rameshwaram to Dhanushkodi Taxi"
      description="Explore the scenic coastal route from Rameshwaram to Dhanushkodi with Island Cabs."
      distance="20 km"
      duration="30 – 40 minutes"
      image={Dhanushkodi}
      attractions={[
        "Dhanushkodi Beach",
        "Ram Setu Viewpoint",
        "Old Dhanushkodi Ruins",
      ]}
    />
  );
}
