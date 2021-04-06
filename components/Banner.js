import Button from "./Button";

export default function Banner({ title }) {
  return (
    <section>
      <div>
        <h4>{title}</h4>
        <Button title="Get a demo" />
      </div>
    </section>
  );
}
