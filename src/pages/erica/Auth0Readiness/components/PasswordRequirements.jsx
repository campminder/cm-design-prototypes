import React from 'react';
import { Check as CheckIcon } from 'lucide-react';
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import './PasswordRequirements.css';

const RuleRow = ({ rule }) => {
  return (
    <li className={`cm-pw-req__item${rule.met ? ' cm-pw-req__item--met' : ''}`}>
      <CheckIcon className="cm-pw-req__icon" size={16} />
      <span>{rule.label}</span>
    </li>
  );
};

export const PasswordRequirements = ({
  password,
  confirmPassword,
}) => {
  const { rules } = usePasswordValidation(password, confirmPassword);

  if (!password) return null;

  return (
    <div className="cm-pw-req">
      <p className="cm-pw-req__title">Your password must contain:</p>
      <ul className="cm-pw-req__list">
        {rules.map((rule) => (
          <React.Fragment key={rule.key}>
            <RuleRow rule={rule} />
            {rule.children && (
              <ul className="cm-pw-req__children">
                {rule.children.map((child) => (
                  <RuleRow key={child.key} rule={child} />
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
