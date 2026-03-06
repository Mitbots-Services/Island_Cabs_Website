import RoutePage from "@/components/routes/RoutePage";
import Madurai from "../../assets/Madurai.webp";

export default function Page() {
  return (
    <RoutePage
      title="Rameshwaram to Madurai Taxi"
      description="Travel comfortably from Rameshwaram to Madurai with Island Cabs. Our drivers ensure a smooth and safe journey for tourists and pilgrims."
      distance="170 km"
      duration="3.5 – 4 hours"
      image={Madurai}
      attractions={[
        "Meenakshi Amman Temple",
        "Thirumalai Nayakar Mahal",
        "Gandhi Memorial Museum",
      ]}
    />
  );
}
