import { Button } from './components/partials/Button';
import { ErrorMessage } from './components/partials/ErrorMessage';
import { SuccessMessage } from './components/partials/SuccessMessage';
import styles from './styles/index.module.scss';

export const App = () => {
  return (
    <div>
      <Button size="lg" text="large"/>
      <br />
      <Button size="md" text="medium" />
      <br />
      <Button size="sm" text="small" />
      <br /> 
      <SuccessMessage message="test success message" />
      <br />
      <ErrorMessage message="test error message"/>
    </div>
  );
}