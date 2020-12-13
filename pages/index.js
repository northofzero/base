import Background from "../containers/background";
import * as S from "../styles/styles";
import icon from "../assets/noz.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { useState } from "react";

export default function Home() {
	const [descVisible, setDescVisible] = useState(false);

	return (
		<S.Container>
			<Background />
			<S.IconContainer>
				{!descVisible && (
					<S.Icon>
						<Fade>
							<img src={icon} />
						</Fade>
					</S.Icon>
				)}
				{descVisible && (
					<>
						<S.Icon>
							<Slide right>
								<img src={icon} />
							</Slide>
						</S.Icon>
						<S.Description>
							<Fade>
								<p>
									Growth of a product is a combination of strategies and not a
									singular marketing function.
								</p>
								<p>
									The core to this philosophy is building not for the world that
									exists today but, the one we would love to live in the future.
								</p>
								<p>
									Whether it’s something really simple or a complex unicorn
									product we help build the brand story, technology and
									data-driven growth stack setting your foundation.
								</p>
								<p>
									We believe in crafting a scalable strategy that grows with you
									and without us (long-term).
								</p>
							</Fade>
						</S.Description>
					</>
				)}
			</S.IconContainer>
			<S.ContactContainer>
				<p
					style={{ cursor: "pointer" }}
					onClick={() => setDescVisible(!descVisible)}
				>
					A FOUNDATION FOR SCALABLE GROWTH
				</p>
				<a href="mailto:run@northofzero.dev">CONTACT</a>
				<p>2020 NORTH OF ZERO</p>
			</S.ContactContainer>
		</S.Container>
	);
}
