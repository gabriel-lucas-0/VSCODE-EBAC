import Grid from "@/components/Grid";
import { destinos } from "@/lib/destinos";

export default function Destinos() {
  return (
    <>
      <div className="gridDestinos">
        <Grid destinos={destinos} />
      </div>
    </>
  );
}
