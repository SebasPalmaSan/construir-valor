import PropTypes from "prop-types";

const Button = ({
  children,
  onClick = () => {},
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseStyles =
    "font-normal font-secondary px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full";

  const variantStyles = {
    primary:
      "bg-primary-500 text-white hover:bg-orange-600 focus:ring-orange-500 rounded-full transition duration-300 ease-in-out",
    secondary:
      "bg-gray-500 text-white hover:bg-gray-700 focus:ring-gray-500 rounded-md transition duration-300 ease-in-out",
    alert:
      "bg-secondary-500 text-white hover:bg-secondary-700 focus:ring-secondary-500 transition duration-300 ease-in-out" ,
    login:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 rounded-xl transition duration-300 ease-in-out",
    register:
      "bg-green-500 text-white hover:bg-green-700 focus:ring-green-500 rounded-xl transition duration-300 ease-in-out",
    filter: "w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded transition duration-300 ease-in-out",
    mercadopago: "bg-blue-mp text-white font-normal py-3 px-6 rounded-lg hover:bg-[#3b92bb] transition duration-300 ease-in-out flex justify-center items-center gap-2"
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "alert",
    "login",
    "register",
    "filter",
    "mercadopago"
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
};

export default Button;
