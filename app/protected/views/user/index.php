<?php
$this->breadcrumbs=array(
	'Users',
);
?>

<h1>Users</h1>

<div class="knockout" data-ko="KoUser">
	<button class="btn" data-bind="click: addUser, visible: userAddable">Create User</button>
	<div data-bind="visible: userCreationFormVisible" style="display: none;" class="well well-small well-collapse">
		<form data-bind="with: formUser, validationOptions: { insertMessages: false }">
			<fieldset>
				<p>
					<label for="userFormUsername">Username</label>
					<input id="userFormUsername" data-bind="value: username" type="text" />
				</p>
				<p class="text-error" data-bind="validationMessage: username"></p>
				<p>
					<label for="userFormName">Name</label>
					<input id="userFormName" data-bind="value: name" type="text" />
				</p>
				<p>
					<label for="userFormEmail">Email</label>
					<input id="userFormEmail" data-bind="value: email" type="email" />
				</p>
				<p class="text-error" data-bind="validationMessage: email"></p>
				<p>
					<label for="userFormLevel">Level</label>
					<select id="userFormLevel" data-bind="options: levels, value: level, optionsText: 'title', optionsValue: 'level'"></select>
				</p>
			</fieldset>
		</form>
		<button data-bind="click: commitUser, enable: formUserValidation" class="btn btn-primary">Save</button>
		<img data-bind="visible: formIsUploading" src="<?php echo Yii::app()->baseUrl; ?>/images/loading.gif" style="display: none;" />
	</div>
	
	<div data-bind="visible: users().length > 0" style="display: none;">
		<table class="table">
			<thead>
				<tr>
					<th>Username</th>
					<th>Name</th>
					<th>Email</th>
					<th>Level</th>
				</tr>
			</thead>
			<tbody data-bind="foreach: users">
				<tr>
					<td data-bind="text: username"></td>
					<td data-bind="text: name"></td>
					<td data-bind="text: email"></td>
					<td data-bind="text: displayLevel()"></td>
				</tr>
			</tbody>
		</table>
	</div>
	
	
</div>