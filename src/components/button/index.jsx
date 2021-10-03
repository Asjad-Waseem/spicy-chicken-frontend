import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({
  href,
  children,
  variant,
  className,
  fluid,
  ...oterProps
}) => {
  const classes = clsx(
    'p-5 leading-none text-16 font-bold text-center rounded-full transition duration-300',
    variant === 'blue' &&
      'bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600',
    fluid && 'w-full',
    className
  );
  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} {...oterProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  fluid: PropTypes.bool,
  href: PropTypes.string,
};

export default Button;
