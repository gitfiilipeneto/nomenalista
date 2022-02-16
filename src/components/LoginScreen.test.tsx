import LoginScreen from './LoginScreen'
import { screen, render} from '@testing-library/react'

beforeEach(() => render(<LoginScreen/>))

test('should render a "Login" inside this page', () => {
    let getScreenText = screen.getByText("login")
    expect(getScreenText).toBeInTheDocument
 })