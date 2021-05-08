document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {item.classList.toggle('change');})
})





let icons = document.querySelectorAll('.section-1-icons i')
let i = 0;

for(i=0;i<icons.length;i++)
{
	setInterval(() => {
		const icon = document.querySelector('.section-1-icons .change');
		icon.classList.remove('change');
		icon.nextElementSibling.classList.add('change');
	}, 4000);
	if(i>=icons.length)
	{
		i=0;
		icons[0].classList.add('change');
	}

}

