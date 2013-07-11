<?php
$this->breadcrumbs=array(
	'Users',
);
?>

<h1>Users</h1>

<div class="knockout" data-ko="KoUser">
	<a href="#formUser" class="btn" data-bind="visible: isAdmin" data-toggle="modal">Add User</a>
	
	<div id="formUser" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="formUserLabel" aria-hidden="true">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
			<h3 id="formUserLabel">Add User</h3>
		</div>
		<div class="modal-body">
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
		</div>
		<div class="modal-footer">
			<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
			<button class="btn btn-primary" data-bind="click: commitUser, enable: formUserValidation">Save</button>
			<img data-bind="visible: formIsUploading" src="<?php echo Yii::app()->baseUrl; ?>/images/loading.gif" style="display: none;" />
		</div>
	</div>
	
	<div data-bind="visible: users().length > 0" style="display: none;">
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Username</th>
					<th>Name</th>
					<th>Email</th>
					<th>Level</th>
				</tr>
			</thead>
			<tbody data-bind="foreach: users">
				<tr data-bind="click: $root.editUser, attr: { class: isAdmin ? 'clickable' : '' }">
					<td data-bind="text: username"></td>
					<td data-bind="text: name"></td>
					<td data-bind="text: email"></td>
					<td data-bind="text: displayLevel()"></td>
				</tr>
			</tbody>
		</table>
	</div>
	
	
</div>