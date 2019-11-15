class Language {
	get tabSchedule(): string {
		return this.translate('Schedule');
	}

	get tabCourses(): string {
		return this.translate('Courses');
	}

	get tabSettings(): string {
		return this.translate('Settings');
	}

	private translate(ident: string): string {
		return ident;
	}
}

export default new Language();
