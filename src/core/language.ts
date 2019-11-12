class Language {
	get tabSettings(): string {
		return this.translate('Settings');
	}

	get tabHome(): string {
		return this.translate('Home');
	}

	private translate(ident: string): string {
		return ident;
	}
}

export default new Language();
