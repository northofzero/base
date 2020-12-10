import Background from "../containers/background";
import * as S from "../styles/styles";
import icon from "../assets/noz.png";

export default function Home() {
	return (
		<S.Container>
			<Background />
			<S.IconContainer>
				<S.Icon>
					<img src={icon} />
				</S.Icon>
			</S.IconContainer>
			<S.ContactContainer>
				<p>A FOUNDATION FOR SCALABLE GROWTH</p>
				<p>CONTACT</p>
				<p>2020 NORTH OF ZERO</p>
			</S.ContactContainer>
		</S.Container>
	);
}
