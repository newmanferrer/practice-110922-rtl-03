interface IPersonProps {
  name: string;
}

export const Person = ({ name }: IPersonProps) => (
  <div aria-label='nameContainer'>Name is {name}</div>
);
