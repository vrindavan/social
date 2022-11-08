import './rightBar.scss';

const RightBar = () => {
	return (
		<div className='rightBar'>
			<div className='container'>
				<div className='item'>
					<span>For You</span>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
							<span>Jane Doe</span>
						</div>
						<div className='buttons'>
							<button>Follow</button>
							<button>Ignore</button>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
							/>
							<span>Jane Doe</span>
						</div>
						<div className='buttons'>
							<button>Follow</button>
							<button>Ignore</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightBar;
