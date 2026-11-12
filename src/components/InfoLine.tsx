interface Props {
  label: string;
  value: string;
}

function InfoLine({ label, value }: Props) {
  return (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );
}

export default InfoLine;
