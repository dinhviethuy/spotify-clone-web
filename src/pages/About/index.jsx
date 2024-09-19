import {Avatar, Col, Input, Row} from "antd";
import {CaretDownOutlined, SearchOutlined} from '@ant-design/icons';
import {FaChevronLeft} from "react-icons/fa6";
import {FaChevronRight} from "react-icons/fa";
import './Search.css';
import imgOne from '../../image/Pop.png';
import imgTwo from '../../image/Podcasts.png';
import rightIcon from '../../image/fi-rr-angle-small-left.png';

function SearchPages() {
  const link = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABPlBMVEX/8NP////+sYX/1MT/3GhOTk5LS0v/8dNQUFBJSUn/9NZTU1NWVlb/89b/8NL/9tjT09P5+fnw8PDa2trm5uagoKBjY2PAwMBLTE90dHReXl57e3vu7u5sbGyvr6+JiYmVlZXJycmurq6FhYVwV467u7vg4OB4eHhCQkKlpaX/4WhLUVSIiIj+s6abm5vm2sHc0b2WkIZ5dm6imYrKwK2vqJjCt6i+j3X96+P/uY3+9fDl18Dy5s2FbZb82cz9wrH+zL66raFybWVXWFLi1r2Jg3ujjYjGqqJ+dlyYi129qWXoy2pxalpyZF2qhGzErmLXnX7dxWaLcGNpZFPIlHd2Y1uceWbho3/z2Gv+49qIh3qGflmFdnOypJ+qmWPdu7HYx8Grl6eYgpuqlanFs7XezsSAaJFlS4hwWIe9qrCCAE2PAAAVhklEQVR4nO1dC3vaRtYGOzMaaUYWAiMGgQwYY4OVmju+KW5sQjdN1rm3Trzdfm3abNL//we+GXHTDZnEyN7uo/dJbIfIYl6dM+c2Z4ZEIkaMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDGWhaTIsqII9z2M6CC32kQcdpvSUhzlv92TEKw2RRhjis9vpCgo1mmrmZDuZGCrQwcQqBsQYNq9QVMVq60DiC5ayh0NbSWQOyaGtWRSPYBEHIQOXRkgigBAWOz/jSjKA0pALsmRQ3hoySHXdkUM842tKpN27++jqJaGwUFyjBoE7cVTUelSjO1nUUFYs/5r7M0NA5F6kODNCcPkHoItafxbkiQpDLIsT26h9ChGu5NHIdLl9DRMI1YASU5YlsXGGnbNNcLVKcHkZh112MgV9out3uC83++f91r2HeTEKcYoNb3QwGQZpyE9sVbGxouNhGwNRjoEpNPuWSHP28Bga8YwWUWilWj1RxeAMgD+FeILdofE2Q8IZGfX5SDt3SwfpVu/iIyioAx0ihB3dIDq3YXKahECK3OGKRF3Lij7RQChKLI/IoT8H/roHzomxdl1RUDbN6qpwowYHUSkqEJiBDEdPv3xx6dDSjG4sBaoahMSmJozVDWmiwDiQjaX2t1MFzczlVqJu0CECDqYX5fMI+MGhhvyKcFkiQfxbZA7lA6fvd/neP7snwR0grVFaFICM46RbwO8t+18wZ6etSoiBGw7XiohcoMRE9gYyCW6iCTc3ZC6lD59v//Axv7+M+byzoOFaCGXDJmaos1kADLsurTj3w1A/P5CYBH8zNvIfWq+eGGSSGQotyh++mBC8MH+S4qp0QyeD5aOYc4pLiSmvOzs10VUstX4ZCJr6GcoWP3rfi+hKPxhyhbFl2uHJohmHl6Y5PmDKZ5TTFqLHLk8whPtG4+9SHgE50cF2gbpaH39bCZD770kFsEzK2X0W9ybdpD56vjQpFHwY4EYfTmV4IP9p5Q+WTgZlD5FZT7kD+vrR+xbWnf4BAdqEDJvf7K+Pr6MzUPdJxzpGhBisiSF6u0e19G1tXcmjcJdsCk+nBN8DVnKsPhaFqnsJSdjP+HGFJSCGDYAYtPwjF/FhahqKO+7qdRC+PLFG2yaXJZMR9fWXpl0wfS4FSxoPpsz/JH69cl5sY71tK1+6+sf2Ng1VA1ieAB0dXyRzXATIv9jk1ptjA6P1169uKQmNt8xhlcmfbL6GJ2Jhb7en1F8i9ryRsjVI8SN6XjwbOwGygcxLAHN1uQJwwYIimn6fRabXzFix8fvfvr52GYIe6t3F/I5Je9ndub9MDxIZpOWz7zx4E+4Kw9kWAXGREnHksZigGL0Bz1icuWcQ8e4aykrFiMzHpcOhixwCnsDpQtwfsrwyA5WghjuMeLq+vQiFtz94n9sQrPXvEbmi2MHw0PmqYbtprzSycgYvn0wB5NhyO0lFjvyqOZkKp4FDPnL42u4oPcwSxD9N5Nbvb6G0ZVTiK8uTYzQaLE1/wZI53Q4lyFzFp3FDKVTFprziPNkOsX2ghkWZgzPuAgJRh3/3Z60W90WMd+49PT4kHMURytMmSVmaZ7PbekzSnuLJyLL8Ctsrkzls3geIm2ipUecLs4jEDC9W4OE0kb6mhvM7BBCRzcl48tDsCide4sHD5iUeooUmAcrbSpuM8PIArexFVGTeVAIYlhm3kKdPIQKxHmVUQyo1XT7loZ/WvNSfHXJ0owVun6lQ9/OvcX+SxPTUa8XkKgxv4IYnyLGxsyYGsH+cBuQdHI8VVUds9g1zcfsuaXQbLN5aDtCB64OLyk2wfkKjQ1XU4cQ918OmUGj9NT7FoI1yWoPAKyM1fRE1VFgTJPD+m7xzJ6FDYgeslcykI6UhNvTWr1rbL5x2tK1d29MFuPg0ekqcwwh0UH4tYPi83/x9K7pmQeC3KVihQ9/k6C9sQqebCJUqPj4pas6YdC1X/69m8YY23lUFvoSeLkFCXEJkPFDdNhtykJI1PH14NnT8KVDUfd/NYEv2WbDQZM5x8SSYVHN//1j22CWlfjyp4rIknwA+BdEMBhnHyw21T1zi5kZ89CloSbBo561+qUOZSBi88fnkxRx//2vLJryWmshoSE0rbzkidG4xMgEGEGo73oZqtlqqXRQLuUJBJhgY5wLp1hM7xKiYBGPmbGjtkiKx0ofYBP969nr5++fv/71LUtpWt73YZfQSZWtuGUwyXAJ6fnyVirtJehQ11SjQERtUgYoU+C6rdSl+Or4+Pjq1eGLQ3s2Xt0QUX07NuTWhUhNlsMQbmSo1gowM1PPl9IBBiLaa1R2Q8g5WE7rHCqxy6szNDH+6dWLN5fEBKZ5aYc2+pKl42+ALLdGw3HJE2gD/3qY0qXTAs02QYVaRl2CnBdbUHQ8Oma5mDliusPLrCxV5FK8jKzYZpeFrNZ5u9vtncr+oFBoopnjS+cCi09LgBkbY25FZGbCmdbonfag1WpTxNzG8RtzFOkylb32EOhplTYQfQbl61Fz1r7lAdG6vaYl89UOuQPMn48Zw4v7WYiTm6Lttm8LJsTOXIiCxVJBefqzjlki9cLU7oUgD0hR8WYCNyMnLlpKlDjFn3829TumNoZ8isDBzcNfBkZQGmVDajGrg8kqI+7lwUSIv9W6eFAToc8TTSA3DV6LXl3EvXylgMUewfH1N4D5xIXWUk6cd0becPjbIfe6S1/KQu4VGNIxtoG4kATzWKuzpHITLt8hoaPANHeC9GaqdlAuVMvlcnYrl9othgYDRQxCKs6rg8DD+iVdD0t8g5dfGDYbeSLW63UepfJ0AkAWa2t75a3FMU8JaHfRtSA1RZYCPllqKioXwdWmpFrJ1+siIyhCRgwhe7XU/ol9B0Y2FcgytdSK963BlyMJ1pYp2slPaOD6UqYE62JdJPlSNleppTK7mWK6uJuq1A4KBhkvdoNyEEnu9aPmx9N12KiJJunffLHS5TUXL5j4mPDwQWDupBYzW2VDhCx71LZ9F2xDvDqDuYCg1aHYUJMHANNF/ncOK2B5KWXUYb2+Vwm1KZu1PTY/oe5VgHSd9hcmgauhLg/qBDDbsakPhzf2Y0k9CjwL9cW9OhTJ9hL5U7GhQSzmPQHfHjIWMRFWxNFiOaxe3GQipKObgiR5BDx2plJnsyy7TPLLoNZ04K3kVETRV8gbQ/rt0e8ryfFlqw1QwWCeqXnzpUO65Rrfdh2Jha+I4dJlETt7cNgrYGEm/2hn59MqGE7a6tj73KgS8gCILjoNRrCxPD+OHMRuRX8IFrhi6ePOzp8LCu5fCUHWMF7GaEsd98JErY5AYG9CGFIQu8xxDtJT/7PdEGTlr53Pf3z6889PK3AnUr9Ol3H4FnQ5w906cmvccqgAV/E/TUCANRU+/f6RaenO58+fH60kheovE1kwSwqdSioup6KZvGemZoGr0agALnxvLlic3gSfVmBRhaWyJ2UEnEp6UAdOWagHeW/Hl42UiHingvNKd/BeY07fX6/8z5jdly+P/ryzflshMXS2p6kQ6U7f9pCJNKi4UUKEiO7ZWoPAIdVNBP1rW9KfH//4fWfnP58S8t31TMs9AByZYa4One14KmbRe1DDEGc4bixyPBzodDoGHfnbriRZkZkcT++yJ5w5Fae7rwJXPWqTEcEzJVYrjWkUV0Z+6nmXfgf1uXHIj3Y+r8KQLgshcQEcolB16I5QiYNhDYpAnMy1FEvN6pnkydGHs7OzI3XKyflwxOAUSvpr5+NdlqLkJwhU5sMqQs/kYto4Vdt0naksBhMhlupiNXk0XgmfdLblIHTaHh20g5Xx05129ct9iB2eOlOvTyblyQdbOpm6ODOZughFbeYRcjn1w/oMR36GZaAFKqMg3Om2Bant8hUVsT7mezQZ+VmqNht1upJzxddH6w6c+Bgujr7vFCwHcdrOnFi3v8+lc5ZcCFtFH7O/339vX5cFuvO/WfQ9COufuxvIp+4SVG3M0Cmdo0UE7XX+7757vP74u+9sIWrA3bSRp6P7l6F07tasnAgn0uFy+e77if4FgvdqMHLf8y9Mkh82RU+xJwuwpdjgRO94zxDfICrzbT4ddztQBvJE6sQe+uPxyBcKccLw8YThUQlhd/RTEUm7275ut7u9RVsfVgTf3WWrd97vnw8GvZZrfwwv5orj1tIJw++XZ/ibb2lH1TFCyG4PXqYedguCv3380zkfBOlcpxQCzMuf2FMJzvNAZcJwfcxwkZba5sgmZ8/DS+xbnSvVefUYAxEuUw/7drCA/pHz3yxOQ7DOwkoMKNGq7mpMlnf+nrgYLixHnUyNESN59gMSt7wXqLvptMqwu62jsNby20FWLJatOOa51ALIqBTT6WJxk8FTbtrlPXu8XY2TexympEmXT/mBBvf3TVFFQe2nq4D06S+WrjxS5mG+0qZ6SBVtD2mq01uE+EMHxX9TrIWW5ragHk2sJpx++bzzZefL73/N7i90aDlkKJk6j8RnQ/8QNmwe2/HevbMf2GwLXZzjq/vRmFPh06Rm8PmP6RvIIxjYTTlFCYjM2JzYAcuHhVbGiXQBID28+FjCMLJ9wn99HFN8NDWncp/isJYE1UAiN/snDMvwS2Z0BLRQgpsFGNZ4fUtIyqMvOx8/fvxt+giFUxrcEjtF0UBgb+m2jHSZeZxSWPl/M4sRvYgwY1LsnFqY6whvdA6bicm0BhBesmKaIwDVcyEXsCeAEB1FGNRsKP/Z+ewuzsoXFIa3JZQghnrtxnULtaaLGO6FaWgGAQSiPXFhQ/79y0d32CtYTA+NwCLhFDmdcQSlShjJ3YYOEdTCBJhM65iOWrIUaRIlWC3vHJD46iIohT17dZtAhKBerWWCWKZTDQMAJGq58AW4bUj7q1iiuIGiv+NYkNsiG385TERqLs8XsiEgRqlRmbVfqMVULZvHjB6ARvj6aZL3R0Wz63cJKK0OG6MRPsJiraBD3swN+EZ1pOuY71YXeaMCREZjiQackOahyCEneh08bswPg5qplfMETvovJt0m2CjXlltezNObtrBHCOY/dFd9O4Qm08ytbLlUelg+aGxVdtNLdw9nqX6fp7oIHbiidsSFyEF6n0eeSB0QGtysAJvgXs+tuQOGqhZdZ/4yMCLX0mSB3p8xZXGOAQN32q8SZWDcG0G+CQh+ZcvF16MG76fnecJQj55hCqLl2iOjYagt6Q9vgV1EZxuhZNkS7tSwChaGvgLgqpHmG7nGmYVsjaB2t6tRFoShqc9KoNHRJHWydH4uURSHYiyCd90pGuQxHbeaKl1KHiJ6Hd3GNf9LPSquaItFCLbBhKHMGxkaIKKyaUJu+Td5SAMqLtlgeQtsinT81nKHVhnfaBhuSAPoPxVG6Xq6mqJlyHslCySiqqJgIezf1+xp94oI6dlGL+uCn5Hp25u7Ekh9SjDxVoMUVydNZAzrU4aS1dEvQo6ruA0sgocEeJ+eMgSRhzTJZHHeOCQkrI3V66i9lN2l5qHuPZdjIwFWtpkrBLsijUYxJ/ysJ61Wa0DMN8c/0V/c2+A3EiS8ur8apEQa4dYLqUX4xnRKzHfHL0zcblmywy8q1/QOGOag7ziQFYJZS4JNjqu1K4QR1UeDudNQ2jR02XY1yMIoD6dVmA29fHd4ePjqeG3tFTFNRnJeN1Ha8A4Y5sEo0sYoA5mH06NTjq9eXPK9XjP+1+FL7ytBmpiRFmrs3dOv5ifDXBI8P5pD6cLgLXmrRIVlwJHmhNIThIfzk2Ew1efN10yHo4/aCkiLuN9LGYDpGUaHJh72HXZN6rl72ph3XjnBVOgRjSuBkND5iZNjEequA5LllujMD9MNUtdCFxVvwvyIkylUHQ8jr3lbhJ/xc3W1tvaz6VklsYCjilHRKaYYZTxjzgXKVQ3KunZ1EVZdv68WEB1EvrrWouDV8RtM3vDj/NwriXJntitPPQBYzLcBbxeaDzBLINT9sWvxQNP9y6uqhglBqDRXi808gO3Iixb8kPx3lyZF5pt3JnziZjiA4+U1tYYBxT1FGVBHjbhGAIIQQ8MjxgZfmvfvjSoD3uiOENRq9i8UGwDRa+f7bQhSBHx54jTE9LpD8aXv/CJLQ6S2myvrvHewqdjnydTHI0/XNIhgoVIxIMIOMuPXqyWAYdZlpioiquqoPUL8dCKtcFAV2Q+eU8OFwdJHICwPpc237zB7NqJMhzxlIH7cLICMAnMi9lj4ASuosZupPbSbEDgztSwiUB4v9xYrJfa6aKTsT01wNWHkANbVKugo/MNNAGDqSuGFp3LCj1Fd/XHlvHZgH3UpM4rY65vknn2W/Kg37bKVeoDwVV4ERH3apJ/TMED58kHZ4M0L4mRb86YGEDoYc1QrBabNmeQWpJYkW71uh2D9upXwtGAoI4RXf3KL0NT08YdwyF1EfR2QUqI36DnPS2VTEUMIdIfBSBbz0F7e5kezV2cVVrXE+WrlRrYgigjqGZ4LQpbt8qMvlITs37tlQYLDPkziWylaEycvyK2ur+DGJr/kektpgAu5nLfDJFU2dE2rHlRcRieVnx5LB4m9LTrNz/GS7dJlQLAtM5PwT0Yxws+kkYIPiHJB6eLA4o2aVgMivNSBwVSalHKTJ5IH7d51p9MOqsawGNl8+v6tCbzT826xwebK163WqGmHvAtI1wlzGrDrI2H1DERf7z9/a2Lq/9+7w4bcIbdYrSkhXStky8w0ebetyQbF5o/7D/YfPGUUAzZB3x0u8C1Wa6pI4xqQNsDIM9nkDjMzT1/v779k3rl9rx+BdYFuwXB6mGsD+k4ss/qEmuaz90MMW3e7ec2LC/DtDDfBZF9QHviL94rVBZg+DT3D+C4gX+BvXxfeguN979uABnx4hqD0+BGK973bS2k7ijfpVK2RPSiXGMrlg+zWVq2WqzCkbGR2PfmFyo+R5l3BYMHJJjKPmO7VV9iDIHia49VY8gQo8+jUDmkA5Q18FNrfeCsfwIarPbEKMCaaQQDVm8FeXenUO/f9QXtCYjjZWaCWRH5uJdF1fcj+6iw1wsj+NKQZEBYPZieXpjoUXQzt+K6zsKvbGtz/J3tJnzDWt4rpisHS4fPWadOaoNlsnp62Wr0ZBoM2xQgaD7O1rWyVZ2CG1ex2jHZv8SHId9uLEYwNacDEQFiWRDuW7FApQeATSJYkvtgzhtLS6PjULxabUrFt8S0BG9J96+GNkFsG/2Aucn7zZ6RJUq+tDXln7bAzLeP9t9NLcCkmWt3uwFqmhCTILFFi2ttMRHO+c1TgGd7yNp2pr3y/UUqMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDH+B/D/ivNs8feEByEAAAAASUVORK5CYII=";

  return (
    <>
      <header className='header'>
        <div className="icon-dir">
          <div className="box">
            <FaChevronLeft/>
          </div>
          <div className="box">
            <FaChevronRight/>
          </div>
          <div className="search">
            <Input size="large" placeholder="Artists songs, or podcasts" prefix={<SearchOutlined />} />
          </div>
        </div>
        <div className="user">
          <div className="img">
            <Avatar size="large" src={link} />
          </div>
          <div className='user-tt'>
            <span>Đinh Viết Huy</span>
            <div className="icon">
              <CaretDownOutlined />
            </div>
          </div>
        </div>
      </header>
      <nav className='nav-one'>
        <div className='nav-title'>
          <span>Your top genres</span>
        </div>
        <Row gutter={[20, 20]}>
          <Col xl={8}>
            <img src={imgOne} alt=""/>
          </Col>
          <Col xl={8}>
            <img src={imgOne} alt=""/>
          </Col>
          <Col xl={8}>
            <img src={imgOne} alt=""/>
          </Col>
        </Row>
        <div className='right-icon'>
          <img src={rightIcon} alt=""/>
        </div>
      </nav>
      <nav className='nav-two'>
        <div className='nav-title'>
          <span>Browse all</span>
        </div>
        <Row gutter={[20, 20]}>
          <Col xl={4}>
            <img src={imgTwo} alt=""/>
          </Col>
          <Col xl={4}>
            <img src={imgTwo} alt=""/>
          </Col>
          <Col xl={4}>
            <img src={imgTwo} alt=""/>
          </Col>
          <Col xl={4}>
            <img src={imgTwo} alt=""/>
          </Col>
          <Col xl={4}>
            <img src={imgTwo} alt=""/>
          </Col>
          <Col xl={4}>
            <img src={imgTwo} alt=""/>
          </Col>
        </Row>
      </nav>
    </>
  )
}

export default SearchPages