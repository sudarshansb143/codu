import { PlateRenderElementProps } from "@udecode/plate-core";

export const CustomH3Component = (props: PlateRenderElementProps) => {
  const { attributes, children } = props;

  return (
    <h3 className="text-white py-2 text-2xl font-bold" {...attributes}>
      {children}
    </h3>
  );
};

export const CustomH4Component = (props: PlateRenderElementProps) => {
  const { attributes, children } = props;

  return (
    <h4 className="text-white py-2 text-xl font-bold" {...attributes}>
      {children}
    </h4>
  );
};
